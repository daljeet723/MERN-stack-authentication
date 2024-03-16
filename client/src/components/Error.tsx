//An interface defines the structure of an object, 
//specifying what properties it can have and their types.
interface ErrorProps {
    //JSX.Element represents a React element,
  children?: JSX.Element | string;
}

//React functional component named Error
//The ({ children }: ErrorProps) syntax is called object destructuring
//means that the component expects an object with a property named children that conforms to the ErrorProps
//: JSX.Element specifies that the Error component returns a JSX element.
export const Error = ({ children }: ErrorProps): JSX.Element => {
  return (
    <div className="error">
        {/* This will return error messages based on validation failed */}
      <b>*{children}</b>
    </div>
  );
};
