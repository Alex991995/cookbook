import React, { useEffect, useState } from 'react';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjFyZUBnbWFpbC5jb20iLCJpYXQiOjE3NDc5MTcwNDMsImV4cCI6MTc0ODM0OTA0M30.yaxTsEUsYEUNVN4HUtuKsHa5VD3imCjavMgfQ0e5PSA'
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
      formData.append('file', file);
      formData.append('data', JSON.stringify(body));

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

      <div>
        {data?.length && data?.map(item => (
          <img src={item.image} alt="fdsefedfgerg" />
        ))}
      </div>
    </>
  );
}

export default App;
