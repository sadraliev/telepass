/**
 * DeliveryStatus represents the delivery status of a message.
 */
export interface DeliveryStatus {
  /**
   * The current status of the message.
   * Possible values: 'sent', 'delivered', 'read', 'expired', 'revoked'.
   */
  status: "sent" | "delivered" | "read" | "expired" | "revoked";

  /**
   * The timestamp when the status was last updated (Unix timestamp).
   * Represents the last time the delivery status was updated.
   */
  updated_at: number;
}
