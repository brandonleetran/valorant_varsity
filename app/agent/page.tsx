async function getAgents() {
    const res = await fetch('https://valorant-api.com/v1/agents');

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
                <li>{agent.displayName}</li>
            )}
        </div>
    )
}