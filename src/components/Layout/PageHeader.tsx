
import React from 'react';

interface PageHeaderProps {
  title: string;
  background?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, background, children }) => {
  const defaultBackground = "bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]";
  
  return (
    <div className={`relative ${background || defaultBackground} bg-cover bg-center`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container-custom py-32 md:py-40">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {children && <div className="max-w-3xl mx-auto">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
