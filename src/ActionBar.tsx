type ActionbarProbs = {
    setSearchText: (searchText: string) => void;
    setGender: (gender:string)=>void;
}

export default function ActionBar(props: ActionbarProbs) {


    return (
        <>
            <input type="text" onChange={(event) => {
                props.setSearchText(event.target.value)
            }}/>
            <select id="gender" name="gender" onChange={(event)=> {

                props.setGender( event.currentTarget.value)
            }
            }>
                <option value="female">female</option>
                <option value="male">male</option>
            </select>
        </>
    )

}




