function clean(value, max = 4000) {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  if (clean(body.website)) return res.status(200).json({ ok: true });

  const name = clean(body.name, 120);
  const company = clean(body.company, 180);
  const email = clean(body.email, 180);
  const phone = clean(body.phone, 80);
  const country = clean(body.country, 80);
  const areaOfInterest = clean(body.areaOfInterest, 180);
  const message = clean(body.message, 5000);
  const formType = clean(body.formType, 80);

  if (!name || !company || !email || !phone || !country || !areaOfInterest) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || 'sales@cits.co.ug';
  const from = process.env.CONTACT_FROM || 'CITS Website <onboarding@resend.dev>';

  if (!apiKey) {
    return res.status(503).json({ error: 'Contact service is not configured' });
  }

  const subject = `CITS Website Enquiry — ${areaOfInterest} — ${company}`;
  const html = `
    <h2>CITS Website Enquiry</h2>
    <p><strong>Form:</strong> ${formType}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Area:</strong> ${areaOfInterest}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    <p><strong>Source:</strong> ${clean(body.source, 500)}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, html }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('Resend error:', details);
    return res.status(502).json({ error: 'Unable to deliver enquiry' });
  }

  return res.status(200).json({ ok: true });
}
