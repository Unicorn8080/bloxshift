const InputComponent = (props: { text: string; mutiple?: boolean }) => {
  return (
    <div className="flex flex-1">
      {!props.mutiple ? (
        <input
          className={`rounded-[30px] border-2 border-white px-8 py-4 flex-1 bg-transparent focus:border-white focus:border-2 box-border`}
          placeholder={props.text}
        />
      ) : (
        <textarea
          className='rounded-[30px] min-h-[300px] border-2 border-white px-8 py-4 flex-1 bg-transparent focus:border-white focus:border-2 box-border'
          placeholder='Tell us something...'
        />
      )}
    </div>
  );
};
export default InputComponent;
