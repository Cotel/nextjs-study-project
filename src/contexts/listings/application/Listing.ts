import { VideogameConsole } from '@/consoles/domain/VideogameConsole';
import { ListingConsoleHealth } from '@/listings/domain/Listing';
import { User } from '@/users/domain/User';

export interface Listing {
  id: string;
  price: string;
  details: {
    consoleHealth: ListingConsoleHealth
    message?: string
  };
  seller: User;
  console: VideogameConsole;
}
