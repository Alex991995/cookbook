import React, { useEffect, useState } from 'react';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVyZUBnbWFpbC5jb20iLCJpYXQiOjE3NDc2NTYzNjQsImV4cCI6MTc0ODA4ODM2NH0.iKvWvYv_HXUb1e8YGcC8vn-T-T3Cdpyjp7R8rlt4I8o';
export interface RecipeDto {
  title: string;
  description: string | null;
  ingredients: string[];
  direction: string[];
  views: number;
  estimated_time: number;
  image: string;
}

function App() {
  const [file, setFile] = useState<File | null>(null);

  const [data, setData] = useState<RecipeDto[]>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  async function f(): Promise<RecipeDto[]> {
    console.log('звапрс');
    const result = await fetch('/api/recipe/all', {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
      method: 'GET',
    });
    return result.json();
  }

  useEffect(() => {
    f().then(d => {
      console.log(d);

      setData(d);
    });
  }, []);

  const handleUpload = async () => {
    if (file) {
      const body = {
        title: '3у3к3к',
        description: null,
        ingredients: ['cds', 'cdsvdfsv'],
        direction: ['cds', 'cdsvdfsv'],
        views: 1,
        estimated_time: 2,
      };

      const formData = new FormData();
      for (const key in body) {
        if (Object.prototype.hasOwnProperty.call(body, key)) {

          formData.append(key, JSON.stringify(body[key]));
        }
      }
      formData.append('file', file);
      // formData.append('data', JSON.stringify(body));

      try {
        const result = await fetch('/api/recipe/', {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
          method: 'POST',
          body: formData,
        });

        const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button onClick={handleUpload} className="submit">
          Upload a file
        </button>
      )}

      <div>{data?.length && data?.map(item => <img src={item.image} alt="fdsefedfgerg" />)}</div>
    </>
  );
}

export default App;
