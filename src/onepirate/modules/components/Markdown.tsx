import * as React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ReactPhotoSphereViewer from 'react-photo-sphere-viewer';


export default function Markdown(props: any) {
  const photoSphereRef = React.createRef();
  const components = {
    h1: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="h1" {...props}>{props.children}</Typography>,
    h2: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="h2" {...props}>{props.children}</Typography>,
    h3: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="subtitle1" {...props}>{props.children}</Typography>,
    h4: ({ node, ...props }: any) => <Typography paragraph={true} gutterBottom={true} variant="caption" {...props}>{props.children}</Typography>,
    h5: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
    h6: ({ node, ...props }: any) => <Typography paragraph={true} variant="h6" {...props}>{props.children}</Typography>,
    p: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
    a: ({ node, ...props }: any) => <Link {...props}>{props.children}</Link>,
    span: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
    li: ({ node, ...props }: any) => <li {...props}>{props.children}</li>,
    meta:  ({ node, ...props }: any) => <ReactPhotoSphereViewer littlePlanet={true} ref={photoSphereRef} {...props}>{props.children}</ReactPhotoSphereViewer>,
  };
  
  return <ReactMarkdown components={components} children={props.children} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />;
}
