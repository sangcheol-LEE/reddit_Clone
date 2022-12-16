import React,{FormEvent, useState} from 'react';
import InputGroup from '../../components/InputGroup';

const SubCreate = () => {
   const [name, setName] = useState("");
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [errors, setErrors] = useState<any>({});

   const handleSubmit = (event:FormEvent) => {
      event.preventDefault()
      try{

      }catch(e) {
         console.error(e)
      }
   }
   return (
      <div className="flex flex-col justify-center pt-16">
         <div className="w-10/12 mx-auto md:w-96">
            <h1 className="mb-2 text-lg font-medium">커뮤니티 만들기</h1>
            <hr />
            <form onSubmit={handleSubmit}>
               <div className="my-6">
                  <p className="font-medium">Name</p>
                  <p className="mb-2 text-xs text-gray-400">
                     대문자를 포함한 커뮤니티 이름은 변경할 수 없습니다.
                  </p>
                  <InputGroup
                     placeholder="Name"
                     value={name}
                     setValue={setName}
                     error={errors.name}
                  />
               </div>

               <div className="my-6">
                  <p className="font-medium">Title</p>
                  <p className="mb-2 text-xs text-gray-400">
                     커뮤니티 제목은 주제를 나타냅니다. 언제든지 변경할 수 있습니다.
                  </p>
                  <InputGroup
                     placeholder="Title"
                     value={title}
                     setValue={setTitle}
                     error={errors.title}
                  />
               </div>

               <div className="my-6">
                  <p className="font-medium">Description</p>
                  <p className="mb-2 text-xs text-gray-400">
                     새로운 회원이 커뮤니티를 이해하는 방법입니다.
                  </p>
                  <InputGroup
                     placeholder="Description"
                     value={description}
                     setValue={setDescription}
                     error={errors.description}
                  />
               </div>
               <div className="flex justify-end">
                  <button className="px-4 py-1 text-sm font-semibold rounded text-white bg-gray-400 border">
                     커뮤니티 만들기
                  </button>
               </div>
            </form>
         </div>

      </div>
   );
};

export default SubCreate;