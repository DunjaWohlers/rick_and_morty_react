
type Character = {char:{name:string, gender:string, image:string,species:string, origin:{name:string, url:string}, location:{name:string}, episode:string[]}};

export default function CharacterCard(props:Character){

    return (
        <div className="characterCard">
            <div>
            <h1>{props.char.name}</h1>
                <p> {props.char.location.name}</p>
                <p>{props.char.gender}, {props.char.species}, </p>
            <img src={props.char.image} alt="Bild wird nicht gefunden"/>
                <p> {[...props.char.episode.map(x=> {
                        let ar= x.split("/");
                        let lastCell=ar[ar.length-1];
                        return "|" +lastCell
                    }
                )]}</p>
            </div>
        </div>
    );
}


