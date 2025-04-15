/**
 * Common parameters for sending a verification message.
 */
type SendVerificationMessageBase = {
  /** Phone number in E.164 format (e.g., +14155552671) */
  phone_number: string;

  /** Optional. Unique ID from checkSendAbility for free request */
  request_id?: string;

  /** Optional. Telegram channel username used to send the message */
  sender_username?: string;

  /** Optional. Callback URL to receive delivery status updates (0–256 bytes) */
  callback_url?: string;

  /** Optional. Custom payload for internal processing (0–128 bytes) */
  payload?: string;

  /** Optional. TTL in seconds (30–3600). Request fee refunded if expired undelivered. */
  ttl?: number;
};

/**
 * Case when you provide your own verification code.
 */
type SendVerificationMessageWithCustomCode = SendVerificationMessageBase & {
  /** Custom verification code (numeric, 4–8 characters) */
  code: string;

  /** code_length is ignored when code is set */
  code_length?: never;
};

/**
 * Case when Telegram generates the code for you.
 */
type SendVerificationMessageWithGeneratedCode = SendVerificationMessageBase & {
  /** Length of the generated verification code (4–8 digits) */
  code_length: number;

  /** You should not provide your own code in this case */
  code?: never;
};

/**
 * Final request type — one of two mutually exclusive options:
 * - Provide your own code (code)
 * - Ask Telegram to generate it (code_length)
 */
export type SendVerificationMessageRequest =
  | SendVerificationMessageWithCustomCode
  | SendVerificationMessageWithGeneratedCode;
