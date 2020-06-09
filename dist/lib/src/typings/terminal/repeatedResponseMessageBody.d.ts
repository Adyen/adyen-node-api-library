import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { PaymentResponse } from './paymentResponse';
import { ReversalResponse } from './reversalResponse';
import { StoredValueResponse } from './storedValueResponse';
export declare class RepeatedResponseMessageBody {
    'cardAcquisitionResponse'?: CardAcquisitionResponse;
    'cardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'loyaltyResponse'?: LoyaltyResponse;
    'paymentResponse'?: PaymentResponse;
    'reversalResponse'?: ReversalResponse;
    'storedValueResponse'?: StoredValueResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
