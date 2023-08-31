
const Link = ({lis}) => {

    return (
        

        <li className="p-6">
              
              <a href={lis.path}>{lis.name}</a>
        
        </li>
    );
};

export default Link;