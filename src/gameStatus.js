import [ history, setHistory ] from "./gameHistory";
export function NextPlayer(){
    const h=history.slice(-1)
    let nextPlayer=h.to==='end'?'end':
            'h.player==='X'?'O':
            'X'   
    return nextPlayer
}

export default function Status(){
    let player=NextPlayer()
    let status = 'Next player: '+player
    if(player==='end'){
        status='Winner: '+player
    }
    return <div className='status'>{status}</div>
}