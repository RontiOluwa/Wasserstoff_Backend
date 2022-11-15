import { ClientDocument } from './models/client.model';
import { RespondentDocument } from './models/respondent.model';

declare global {
  namespace Express {
    export interface Request {
      client?: ClientDocument;
      respondent: RespondentDocument;
    }
  }
}
