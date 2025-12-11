import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message, Role } from '../types';
import DataChart from './DataChart';
import { User, Bot, Link as LinkIcon } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] lg:max-w-[65%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mt-1 mx-2 
          ${isUser ? 'bg-indigo-600' : 'bg-emerald-600'}`}>
          {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
        </div>

        {/* Content Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`px-5 py-3 rounded-2xl shadow-sm border
            ${isUser 
              ? 'bg-indigo-600 text-white border-indigo-500 rounded-tr-sm' 
              : 'bg-white text-slate-800 border-slate-100 rounded-tl-sm'
            }`}>
            
            {/* Text Content */}
            <div className={`prose prose-sm max-w-none 
              ${isUser ? 'prose-invert' : 'prose-slate'}
            `}>
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>

            {/* Grounding Sources (Google Search) */}
            {!isUser && message.groundingUrls && message.groundingUrls.length > 0 && (
               <div className="mt-3 pt-3 border-t border-slate-100">
                 <p className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1">
                   <LinkIcon size={12} /> Sources
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {message.groundingUrls.map((url, idx) => (
                     <a 
                       key={idx} 
                       href={url.uri} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-xs bg-slate-50 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-2 py-1 rounded border border-slate-200 transition-colors truncate max-w-[200px]"
                     >
                       {url.title || url.uri}
                     </a>
                   ))}
                 </div>
               </div>
            )}
          </div>

          {/* Chart Rendering (Outside bubble for width) */}
          {!isUser && message.chartData && (
            <div className="w-full mt-2 min-w-[300px] md:min-w-[450px]">
              <DataChart config={message.chartData} />
            </div>
          )}
          
          {/* Timestamp */}
          <span className="text-[10px] text-slate-400 mt-1 px-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;