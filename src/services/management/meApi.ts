import Client from "../../client";
import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { 
    AllowedOrigin, 
    AllowedOriginsResponse, 
    CreateAllowedOriginRequest, 
    MeApiCredential 
} from "../../typings/management/models";

import Me from "../resource/management/me";

class MeApi extends Service {
    //Me
    private readonly _retrieveMe: Me;
    private readonly _allowedOrigins: Me;


    public constructor(client: Client) {
        super(client);
        this._retrieveMe = new Me(this, "");
        this._allowedOrigins = new Me(this, "/allowedOrigins");
    }

    public get Me(): {
        retrieve:() => Promise<MeApiCredential>;
        createAllowedOrigin: (allowedOriginRequest: CreateAllowedOriginRequest) => Promise<AllowedOriginsResponse>;
        retrieveAllowedOrigins: () => Promise<AllowedOriginsResponse>;
        retrieveAllowedOrigin: (originId: string) => Promise<AllowedOrigin>;
        deleteAllowerdOrigin: (originId: string) => Promise<Record<string, unknown>>;
    } {
        const retrieve = () => getJsonResponse<Record<string, never>, MeApiCredential>(
            this._retrieveMe,
            {},
            { method: "GET"}
        );

        const createAllowedOrigin = (allowedOriginRequest: CreateAllowedOriginRequest) => getJsonResponse<CreateAllowedOriginRequest, AllowedOriginsResponse>(
            this._allowedOrigins,
            allowedOriginRequest,
        );

        const retrieveAllowedOrigins = () => getJsonResponse<Record<string, never>, AllowedOriginsResponse>(
            this._allowedOrigins,
            {},
            { method: "GET"}
        );
        
        const retrieveAllowedOrigin = (originId: string) => {
            const allowedOrigin = new Me(this, `/allowedOrigins/${originId}`);
            return getJsonResponse<Record<string, never>, AllowedOrigin>(
                allowedOrigin,
                {},
                { method: "GET"}
            );
        };

        const deleteAllowerdOrigin = (originId: string) => {
            const allowedOrigin = new Me(this, `/allowedOrigins/${originId}`);
            return getJsonResponse<Record<string, never>, Record<string, unknown>>(
                allowedOrigin,
                {},
                { method: "DELETE"}
            );
        };

        return { retrieve, createAllowedOrigin, retrieveAllowedOrigins, retrieveAllowedOrigin, deleteAllowerdOrigin };
    }
}

export default MeApi;
