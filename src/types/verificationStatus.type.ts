/**
 * VerificationStatus represents the verification status of a code.
 */
export type VerificationStatus = {
  /**
   * The current status of the verification process.
   * Possible values: 'code_valid', 'code_invalid', 'code_max_attempts_exceeded', 'expired'.
   */
  status:
    | "code_valid"
    | "code_invalid"
    | "code_max_attempts_exceeded"
    | "expired";

  /**
   * The timestamp when the verification status was last updated (Unix timestamp).
   * Represents the last time the verification status was updated.
   */
  updated_at: number;

  /**
   * Optional. The code entered by the user.
   * Included if the user entered a code during the verification process.
   */
  code_entered?: string;
};
