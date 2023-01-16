async function getAgents() {
    const res = await fetch(process.env.AGENT_ENDPOINT as string);

    if (!res.ok) {
        throw new Error('Failed to fetch agents.');
    }
   
    return res.json();
}

export default async function AgentPage() {
    const agents : any = await getAgents();
    console.log(agents.data);
    return (
        <div>
            <h1>All Agents</h1>
            {agents.data.map((agent : any) => 
                <div>
                    <li key={agent.uuid}>{agent.displayName} has an id of {agent.uuid} with the display icon:</li>
                    <img src={agent.displayIcon}></img>
                </div>
            )}
        </div>
    )
}