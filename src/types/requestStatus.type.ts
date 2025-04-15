import { DeliveryStatus } from "./delivery-status.type";
import { VerificationStatus } from "./verificationStatus.type";

/**
 * RequestStatus represents the status of a verification message request.
 */
export type RequestStatus = {
  /**
   * Unique identifier of the verification request.
   * Corresponds to the request ID.
   */
  request_id: string;

  /**
   * The phone number to which the verification code was sent, in the E.164 format.
   */
  phone_number: string;

  /**
   * Total request cost incurred by either checkSendAbility or sendVerificationMessage.
   * This is the charge for the request.
   */
  request_cost: number;

  /**
   * Optional. If True, the request fee was refunded.
   * It will be returned if the request cost was refunded.
   */
  is_refunded?: boolean;

  /**
   * Optional. Remaining balance in credits.
   * This will be returned only in response to a request that incurs a charge.
   */
  remaining_balance?: number;

  /**
   * Optional. The current message delivery status.
   * Only included if a verification message was sent to the user.
   */
  delivery_status?: DeliveryStatus;

  /**
   * Optional. The current status of the verification process.
   * Only included if the verification status is relevant.
   */
  verification_status?: VerificationStatus;

  /**
   * Optional. Custom payload provided in the request.
   * Custom data provided by the user for internal use, not visible to the recipient.
   */
  payload?: string;
};
