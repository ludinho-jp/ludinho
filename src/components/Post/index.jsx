import "./styles.css";

export default function Post() {
  return (
    <div className="post">
      <header>
        <h1>Titulo</h1>
        <span>
          {"17/01/2023"} by {"Pedro"}
        </span>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        obcaecati amet, alias quaerat eaque minima aspernatur maiores. Totam
        sapiente blanditiis reiciendis quaerat optio recusandae earum ipsam
        consequuntur, est iste ipsa.
      </p>
    </div>
  );
}
