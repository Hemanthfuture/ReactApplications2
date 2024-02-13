import './model.css';


export default function Model({id,header,body,footer}){
    return(
        <div id={id||'model'} className="modelOne">
            <div className="modelsub">
                <div className="modelHeader">
                    {header}
                </div>
                <div className="modelBody">
                    {body}
                </div>
                <div className="modelFooter">
                    {footer}
                </div>
            </div>
        </div>
    )
}