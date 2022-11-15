interface Topic {
  user: string;
  title: string;
  desc: string;
  created: string;
}

interface Block {
  topicID: string;
  blocks: string;
  category: string;
  created: string;
}

// interface Client {
//   email: string;
//   created: string;
//   phone_no: string;
//   username: string;
//   password?: string;
//   first_name: string;
//   last_name: string;
//   otp: string;
//   otp_status: string;
//   firebaseToken: string;
// }

// interface ChangePasswordPayload {
//   oldPassword: string;
//   newPassword: string;
// }

// interface updateFirebaseToken {
//   firebaseToken: string;
// }

// interface ClientLoginPayload extends Pick<Client, 'email' | 'password'> { }

// interface ClientVerifyPayload extends Pick<Client, 'email' | 'otp'> { }

// interface ClientResendOtpPayload extends Pick<Client, 'email'> { }

// interface CreateClientPayload extends Omit<Client, 'created'> { }

// type SurveyStatus = 'active' | 'completed' | 'pending';

// interface Forgot {
//   user?: string;
//   token?: string;
//   created?: string;
// }

// interface Post {
//   user?: string;
//   content?: string;
//   created?: string;
// }

// interface StakeTracker {
//   stake?: string;
//   staker?: string;
//   created?: string;
// }

// interface Stake {
//   user?: string;
//   postId?: string;
//   stakeableId?: string;
//   stakeableType?: string;
//   title?: string;
//   description?: string;
//   amount?: number;
//   category?: string;
//   stake_type?: string;
//   created?: string;
// }

// interface Responses {
//   user?: string;
//   response?: string;
//   respondableId?: string;
//   respondableType?: string;
//   parentId?: string;
//   depth?: number;
//   created?: string;
// }

// interface Image {
//   imageableId?: string;
//   imageableType?: string;
// }

// interface FetchQuery {
//   page?: string;
//   limit?: string;
// }

// interface UserSettings {
//   mfa?: boolean;
//   notifications?: boolean;
// }
