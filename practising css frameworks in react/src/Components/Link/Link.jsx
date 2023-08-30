
const Link = ({lis}) => {

    return (
        

        <li className="mr-12">
              
              <a href={lis.path}>{lis.name}</a>
        
        </li>
    );
};

export default Link;