async function getAgents() {
    const res = await fetch('http://localhost:3000/api/agent');

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
                <li key={agent.uuid}>{agent.agentName} has an id of {agent.uuid}</li>
            )}
        </div>
    )
}