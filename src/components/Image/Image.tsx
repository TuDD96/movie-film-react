import { useState, forwardRef } from "react";
import clsx from "clsx";

interface ImageType {
  src: any;
  alt: any;
  className: any;
}

const Image = ({ src, alt, className, ...props }: ImageType, refProps: any) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    console.log("error");
  };

  return (
    <img
      className={clsx(className)}
      ref={refProps}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
};

export default forwardRef(Image);
