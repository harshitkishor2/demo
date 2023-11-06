// for dispatch args
interface DispatchProps {
    type: string;
    payload?: any;
}

//  For object props
type Params = Record<string, object | string | undefined | boolean>;

