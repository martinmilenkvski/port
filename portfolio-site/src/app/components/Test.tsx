

interface TestProps {
    name: string;
    description: string;
}


function Test(props: TestProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            
            <p>{props.description}</p>
        </div>
    );
}

export default Test;

