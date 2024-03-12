export interface PaymentConfirmation {
  data: Data;
}

export interface Data {
  id: string;
  created_at: string;
  finalized_at: string;
  amount_in_cents: number;
  reference: string;
  currency: string;
  payment_method_type: string;
  payment_method: PaymentMethod;
  payment_link_id: any;
  redirect_url: string;
  status: string;
  status_message: any;
  merchant: Merchant;
  taxes: any[];
  tip_in_cents: any;
}

export interface PaymentMethod {
  type: string;
  extra: Extra;
  installments: number;
}

export interface Extra {
  name: string;
  brand: string;
  card_type: string;
  last_four: string;
  is_three_ds: boolean;
  three_ds_auth: ThreeDsAuth;
  external_identifier: string;
  processor_response_code: string;
}

export interface ThreeDsAuth {
  three_ds_auth: ThreeDsAuth2;
}

export interface ThreeDsAuth2 {
  current_step: string;
  current_step_status: string;
}

export interface Merchant {
  id: number;
  name: string;
  legal_name: string;
  contact_name: string;
  phone_number: string;
  logo_url: any;
  legal_id_type: string;
  email: string;
  legal_id: string;
  public_key: string;
}
