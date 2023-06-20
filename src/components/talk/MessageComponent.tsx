import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { RiSendPlane2Fill } from 'react-icons/ri';

interface MessageComponentProps {
  WEBHOOK_URL: string;
}

const MessageComponent = ({ WEBHOOK_URL }: MessageComponentProps) => {
  const email = useRef<string>('');
  const message = useRef<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  const sendMessage = async () => {
    if (email.current == '' || message.current == '')
      return setErrMsg('Please fill out all fields!');
    if (!emailRegex.test(email.current)) return setErrMsg("Hmm, that doesn't look like an email.");

    setSending(true);

    const data = { email: email.current, message: message.current };
    if (!data) return setErrMsg('Nice try :)');
    if (data.message.length < 1 || data.email.length < 1)
      return setErrMsg('Please fill out all fields!');
    if (data.message.length > 1000) return setErrMsg('Message is too long!');
    if (data.email.length > 500) return setErrMsg('Email is too long!');

    await axios
      .post(WEBHOOK_URL, {
        embeds: [
          {
            color: 3108090,
            title: data.email,
            author: {
              name: window.navigator.userAgent ?? 'unknown!?',
            },
            description: data.message,
          },
        ],
      })
      .then((response) => {
        if (response.data.err) return setErrMsg('Something went wrong...');
        return setSending(false);
      });

    return setMessageSent(true);
  };

  return (
    <div className='md:col-span-2 h-auto min-h-[21.5rem] row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50'>
      <AnimatePresence exitBeforeEnter>
        {messageSent && (
          <motion.p
            key={'contactThankYou'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='w-full h-full flex items-center justify-center text-gray-400 text-sm'
          >
            Thanks for reaching out! I'll get back to you soon.
          </motion.p>
        )}
        {!messageSent && (
          <motion.div
            key={'contactForm'}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h1 className='font-bold text-sm dark:text-slate-500 mb-1'>EMAIL</h1>
            <input
              placeholder='example@mail.com'
              type='text'
              onChange={(e: any) => (email.current = e.target.value)}
              className='w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20'
            />
            <h1 className='font-bold text-sm dark:text-slate-500 mb-1'>MESSAGE</h1>
            <textarea
              placeholder="Hi Elias, what's up?"
              onChange={(e: any) => (message.current = e.target.value)}
              className='w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20'
            />
            <div className='w-full flex flex-row justify-between items-center'>
              <p className='text-gray-900 dark:text-gray-300 text-sm'>{errMsg}</p>
              <button
                onClick={sendMessage}
                aria-label='send-message'
                className='border border-gray-800 hover:bg-gray-200 dark:border-blue-600/80 dark:bg-blue-600/70 dark:hover:bg-blue-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75'
              >
                <span className='mt-[2px]'>Send</span>
                {!sending && <RiSendPlane2Fill className='ml-2' />}
                {sending && <ImSpinner2 className='w-4 h-4 ml-2 animate-spin' />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessageComponent;
