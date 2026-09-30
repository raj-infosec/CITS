<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// Honeypot for basic bot protection.
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function clean_value($value, $max = 4000) {
    $value = trim((string)($value ?? ''));
    $value = preg_replace('/[\r\n]+/', ' ', $value);
    return mb_substr($value, 0, $max);
}

$name = clean_value($data['name'] ?? '', 120);
$company = clean_value($data['company'] ?? '', 180);
$email = clean_value($data['email'] ?? '', 180);
$phone = clean_value($data['phone'] ?? '', 80);
$country = clean_value($data['country'] ?? '', 80);
$area = clean_value($data['areaOfInterest'] ?? '', 180);
$message = clean_value($data['message'] ?? '', 5000);
$formType = clean_value($data['formType'] ?? '', 80);
$source = clean_value($data['source'] ?? '', 500);

if (!$name || !$company || !$email || !$phone || !$country || !$area) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$to = 'sales@cits.co.ug';
$subject = 'CITS Website Enquiry - ' . $area . ' - ' . $company;
$body = "CITS Website Enquiry\n\n" .
    "Form: {$formType}\n" .
    "Name: {$name}\n" .
    "Company: {$company}\n" .
    "Email: {$email}\n" .
    "Phone: {$phone}\n" .
    "Country: {$country}\n" .
    "Area of Interest: {$area}\n\n" .
    "Message:\n{$message}\n\n" .
    "Source: {$source}\n";

$headers = "From: CITS Website <no-reply@cits.co.ug>\r\n" .
           "Reply-To: {$email}\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);
if (!$sent) {
    http_response_code(502);
    echo json_encode(['error' => 'The hosting mail service could not deliver the enquiry']);
    exit;
}

echo json_encode(['ok' => true]);
