'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";


const Charts = () => {
    const [imageData1, setImageData1] = useState('');
    const [imageData2, setImageData2] = useState('');
    const [imageData3, setImageData3] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [res1, res2, res3] = await Promise.all([
                    fetch('http://localhost:5000/projectCountChart', {
                        cache: 'no-store'
                    }),
                    fetch('http://localhost:5000/pendingCountChart', {
                        cache: 'no-store'
                    }),
                    fetch('http://localhost:5000/goLiveCountChart', {
                        cache: 'no-store'
                    })
                ])
                const result3 = await res3.json();
                const result2 = await res2.json();
                const result1 = await res1.json();
                // Decode base64 image data to a data URL
                const decodedImageData3 = `data:image/jpeg;base64,${result3.image}`;
                const decodedImageData2 = `data:image/jpeg;base64,${result2.image}`;
                const decodedImageData1 = `data:image/jpeg;base64,${result1.image}`;
                setImageData3(decodedImageData3);
                setImageData2(decodedImageData2);
                setImageData1(decodedImageData1);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array means this effect runs once after the first render.
    return (
        <section>
            <Wrapper>
                <div>
                    <div className='mb-8 space-y-4'>
                        <h1 className="text-2xl md:text-4xl font-bold text-center mt-3">
                            Welcome to BankIslami
                        </h1>
                        <h2 className="text-muted-foreground font-light text-sm md:text-lg text-center">
                            Dive in and witness performance like never before
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                        {
                            <>
                                <div className="backdrop-blur-lg shadow-xl shadow-[#989A98] rounded-md  border-slate-900 h-[335px] w-[470px] flex item-center justify-center">
                                    {
                                        imageData1 ? <Image src={imageData1} width={600} height={600} alt="hello" /> : <div className="loader-spinner"></div>
                                    }
                                </div>

                                <div className="backdrop-blur-lg shadow-xl shadow-[#989A98] rounded-md  border-slate-900 h-[335px] w-[470px] flex item-center justify-center">
                                    {
                                        imageData1 ? <Image src={imageData2} width={600} height={600} alt="hello" /> : <div className="loader-spinner"></div>
                                    }
                                </div>

                                <div className="backdrop-blur-lg shadow-xl shadow-[#989A98] rounded-md  border-slate-900 h-[335px] w-[470px] flex item-center justify-center">
                                    {
                                        imageData1 ? <Image src={imageData3} width={600} height={600} alt="hello" /> : <div className="loader-spinner"></div>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Charts;
