import './Newcart.css';
//creating data to build the ui i am practising

const task= {

    id:"unique id 001",
    subtitle:"subtitle",
    createdAT: "2023-05-24T07:34:02.109Z",
    tags: [
         
        {
            id: "tag 001",
            text: "its done",
            icon:"T"
        },
          
        {
            id: "tag 002",
            text: "its cancelled",
            icon:"x"
        },
          
        {
            id: "tag 003",
            text: "its in progress",
            icon:"p"
        },
        {
            id: "tag 004",
            text: "just wrote it",
            icon:"w"
        }


    ],

    comments:[
   
        {
            id:"comment-id:001",
            user: {
             
                avatar:"xyz.com",
                id:"user-id:001",
                name:"nafis",
            },
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nam nulla veniam molestiae dignissimos eveniet temporibus? Eaque alias quae harum!"
        }

    ],
    tasks: [
        {
            id:"task001",
            title:"Froggy Neison",
            text:"Here to clean the street of nafis kitches ",
            status:"done"
        },
        {
            id:"task002",
            title:"Lois ck",
            text:"this one is cancelled ",
            status:"cancelled"
        },
        {
            id:"task003",
            title:"Albert ainestain",
            text:"Here to clean the street of nafis kitches ",
            status:"progress"
        },
        {
            id:"task004",
            title:"Albert ainestain",
            text:"Here to clean the street of nafis kitches ",
            status:"progress"
        },
    ]


}


function getDay(datestr){


    const date= new Date(datestr).getDay();


    const days= ["sunday","monday","tuesday","wednesday","thursday","fiday","satarday"];

    return days[date];

}

function formatdate(datestr){

    const date= new Date(datestr);

    return `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`;
}

console.log(getDay(task.createdAT));

console.log(formatdate(task.createdAT));




function Newcart(){

return <div>

<h1>{getDay(task.createdAT)}, {formatdate(task.createdAT)}</h1>

<h3>{task.subtitle}</h3>

<ul>
    {task.tags.map(tag=> <li key={tag.id}>

        <small>{tag.icon}</small> - {tag.text}

    </li>)}
</ul>
<hr />

<p>Notes Link To people</p>


<div>
 {
    task.comments.map(comment=> <div key={comment.id}>

        <div>
            <h4>{comment.user.name}</h4>
            <p>{comment.text}</p>
        </div>

    </div>)
 }

</div>

<ul>

    {
        task.tasks.map(task=> <li key={task.id}>

            <h3>{task.title}</h3>
            <p>
                <small>{task.status}</small>
            </p>
            <p>{task.test}</p>

        </li>)
    }
</ul>

</div>



}

export default Newcart;