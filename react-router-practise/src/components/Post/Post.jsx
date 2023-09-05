const Post = ({p}) => {


//     console.log(p)
         const {id,title} = p;
 

    return (
        <div>

            <h2>Id is:-{p.id}</h2>
            <h5>Title:- {p.title}</h5>
            
        </div>
    );
};

export default Post;