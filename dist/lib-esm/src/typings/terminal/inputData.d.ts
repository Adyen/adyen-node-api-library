import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { InputCommandType } from './inputCommandType';
export declare class InputData {
    'beepKeyFlag'?: boolean;
    'defaultInputString'?: string;
    'device': DeviceType;
    'disableCancelFlag'?: boolean;
    'disableCorrectFlag'?: boolean;
    'disableValidFlag'?: boolean;
    'fromRightToLeftFlag'?: boolean;
    'globalCorrectionFlag'?: boolean;
    'immediateResponseFlag'?: boolean;
    'infoQualify': InfoQualifyType;
    'inputCommand': InputCommandType;
    'maskCharactersFlag'?: boolean;
    'maxDecimalLength'?: number;
    'maxInputTime'?: number;
    'maxLength'?: number;
    'menuBackFlag'?: boolean;
    'minLength'?: number;
    'notifyCardInputFlag'?: boolean;
    'stringMask'?: string;
    'waitUserValidationFlag'?: boolean;
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
