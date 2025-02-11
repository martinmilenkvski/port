
interface TestProps {
    name: string;
}


function Test(props: TestProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            
        </div>
    );
}

export default Test;