
import './myStyles.css';
type Character = {char:{name:string, gender:string,
        image:string,species:string, origin:{name:string, url:string},
        location:{name:string}, episode:string[],
        id:number,
}};

export default function CharacterCard(props:Character){
    let episodeNumbers:string[]=props.char.episode.map(x=>{
        let ar=x.split("/");
        let lastCell=ar[ar.length-1];
        return lastCell;
    })

    let range:string="";
    let previousNumberString:string;
    let counter:number=0;
    episodeNumbers.forEach(e=>{
        if( counter==0){
            range += e;
        }else if((parseInt(e)-1)===(parseInt(previousNumberString))){
            if(parseInt(episodeNumbers[counter+1])>parseInt(e)+1||counter+1===episodeNumbers.length){
                range += "-"+e;
            }
        }else{
            range += "|" +e;
        }
        previousNumberString=e;
        counter++;
    })

    return (
        <div className="characterCard">
            <div>
            <h1>{props.char.name}</h1>
                <p> {props.char.location.name}</p>
                <p>{props.char.gender}, {props.char.species}, </p>
            <img src={props.char.image} alt="Bild wird nicht gefunden"/>
                <p> {[range]}</p>
            </div>
        </div>
    );
}


