import React, { useEffect, useState } from 'react';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InFxcXFxcmVAZ21haWwuY29tIiwiaWF0IjoxNzQ4MjkyNDY1LCJleHAiOjE3NDg3MjQ0NjV9.DkCH-vqDJgIfMfRz-u2lJRgYlkBl5dAsj47xllnQd1k';

function Cookbook() {
  const [file, setFile] = useState<File | null>(null);

  const [result, setResult] = useState();

  console.log(result);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      // const body = {
      //   title: 'vffffffffffffffffff',
      //   description: null,
      //   recipesIDs: [
      //     { id: '831cd7ad-4a36-4f98-b411-595c3c581693' },
      //   ],
      // };

      const body = {
        name: 'sasha',

        email: 'qqqqqre@gmail.com',
        password: '233ed32d32',
      };

      const formData = new FormData();
      formData.append('file', file);
      formData.append('data', JSON.stringify(body));

      try {
        const result = await fetch('/api/account/settings', {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
          method: 'PUT',
          body: formData,
        });

        const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  async function f() {
    const result = await fetch('/api/account/settings', {
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

      setResult(d);
    });
  }, []);

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

      {/* <div>
        {result?.data.length &&
          result.data.map(item => <img src={item.image} alt="fdsefedfgerg" />)}
      </div> */}
    </>
  );
}

export default Cookbook;
