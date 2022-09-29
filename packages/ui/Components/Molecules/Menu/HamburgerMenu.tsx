import * as React from "react";

export const DefaultComponent = (props: any) => {
    return <div>
        <button>
            {props.buttonText}
        </button>
    </div>;
};
