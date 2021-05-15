import { Card, CardContent, Typography } from '@material-ui/core'
import React,{forwardRef} from 'react';
import FlipMove from 'react-flip-move';
import './Message.css'

const Message = forwardRef(({message,username},ref) => {
    const isuser = username === message.username

    return (
        <div ref={ref} className={`message ${isuser && 'message_user'}`}>
            <Card className={isuser ? "message__usercard":"message__guestcard"}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="white">
                    {!isuser && `${message.username || 'Unknown'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
);

export default Message
