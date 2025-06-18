'use client';

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import gambarKursi from '../public/kursi.jpg'

const ImageWrapper = styled.div`
  background-color: #053405;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-left: 4rem;
  padding-right: 3rem;
  border-end-end-radius: 8rem;
  border-end-start-radius: 8rem;

  img {
    object-fit: cover;
  }
`

const Button = styled.button`
background: #053405;
color: white;
padding: 0.4rem;
border-radius: 0.4rem;
border: none;
`
export const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <ImageWrapper>
        <Image
        src='/globe.svg'
        width={120}
        height={120}
        alt="testing"
        />
        <Image
        src='https://media.istockphoto.com/id/182930332/id/foto/ikan-kecil-mengikuti-pemimpin.jpg?s=1024x1024&w=is&k=20&c=d7NyArfqPjbug8j3Q_dJS2YnUfZeSSXlk3ccCQDWSLo='
        width={120}
        height={120}
        alt="betta fish"
        />

        <Image
        src={gambarKursi}
        alt="gambar kursi"
        width={100}
        height={120}
        />
        </ImageWrapper>


        <p>Count: {count}</p>
        <Button onClick={() => setCount(count +1)}>
            Increament
        </Button>
    </div>
  )
}
