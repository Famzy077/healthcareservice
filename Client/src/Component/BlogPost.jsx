import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";

const BlogPost = () => {
  return (
    <div className="blogPost">
        <h1 className="text-center text-4xl font-semibold m-4">BlogPost</h1>
        <h2 className="text-3xl font-semibold text-blue-700 text-center">Latest Update</h2>
        <div className="BlogBox  p-3 gap-5">

        <div className="p-3">
            <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                Doctor Reviews 
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                <Tooltip content="Natali Craig">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="https://media.istockphoto.com/id/1369408412/photo/business-colleagues-having-a-conversation.jpg?s=612x612&w=0&k=20&c=56WHSSqEp8ybslPFodgylAbeCR9fExoF5eJVNbKZ_8s="
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                <Tooltip content="Tania Andrew">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                </div>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter>
            </Card>
        </div>

        <div>
            <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                src="https://media.istockphoto.com/id/1387138238/photo/pretty-african-american-woman-freelancer-using-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=03sDvlnCwkkguwusBMLwcjRpamIaRWTOPPnHa0JK53M="
                alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                Nurse Review Check
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                <Tooltip content="Natali Craig">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                <Tooltip content="Tania Andrew">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src="https://media.istockphoto.com/id/1387138238/photo/pretty-african-american-woman-freelancer-using-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=03sDvlnCwkkguwusBMLwcjRpamIaRWTOPPnHa0JK53M="
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                </div>
                <Typography className="font-normal">Febuary 15</Typography>
            </CardFooter>
            </Card>
        </div>

        <div>
            <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                src="https://media.istockphoto.com/id/1444802210/photo/business-handshake-businessman-man-office-meeting-agreement-hand-teamwork-contract-greeting.jpg?s=612x612&w=0&k=20&c=EI_cJttSi20K81nqd0jOSLNYewk_YwEI59_o807LIyk="
                alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                Doctor Mother Care
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                <Tooltip content="Natali Craig">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                <Tooltip content="Tania Andrew">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                </div>
                <Typography className="font-normal">Apri 09</Typography>
            </CardFooter>
            </Card>
        </div>

        </div>
    </div>
  )
}

export default BlogPost