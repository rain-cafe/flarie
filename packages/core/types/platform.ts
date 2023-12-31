import { EventEmitter } from 'node:events';
import { FlarieCommand } from './command';
import { FlarieMessage } from './message';

export type MessageEnvelope = {
  id: string;
  displayName: string;
  message: string;
};

export declare interface Platform extends EventEmitter {
  send(serverId: string, channelId: string, message: string | FlarieMessage): Promise<void>;
  authenticate(): Promise<void>;
  register(commands: FlarieCommand[]): Promise<void>;

  on(event: 'ready', callback: () => void): this;
  on(event: 'message', callback: (envelope: MessageEnvelope) => void): this;
  once(event: 'ready', callback: () => void): this;
  once(event: 'message', callback: (envelope: MessageEnvelope) => void): this;
  emit(event: 'ready'): boolean;
  emit(event: 'message', envelope: MessageEnvelope): boolean;
}
