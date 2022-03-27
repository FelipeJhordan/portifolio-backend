import { Injectable } from "@nestjs/common";
import { GoogleApiAdapter } from "src/infra/document/google.api-document";

@Injectable()
export class MessageService {
    constructor(private googleAdapter: GoogleApiAdapter) {}
    async addMessage(): Promise<string> {
        return 'eai'
    }
}