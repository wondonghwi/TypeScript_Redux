import React, {FormEvent, useState} from 'react';

interface TodoInsertProps {
    onInsert: (state: string) => void;
}

const TodoInsert = ({onInsert}: TodoInsertProps) => {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder='할 일을 입력하세요!'/>
            <button type='submit'>등록</button>
        </form>
    );
};

export default TodoInsert;