import React, { useMemo } from "react"
import { Link } from "./Link"
import { useInView } from "react-intersection-observer"
import classNames from "classnames"



import { File } from "./File"
import { Section } from "./Section"

export function lowercaseKeys(obj: {}) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k[0].toLowerCase() + k.slice(1), v])
  );
}

interface MarqueeItemProps extends MarqueeItem {
  size?: string
}

export interface MarqueeItem {
  image?: File
  backgroundImage?: File
  uRL?: string
}

export interface Marquee {
  marqueeItem?: MarqueeItem[]
  size?: 'Large' | 'Medium'
  margin?: 'Regular' | 'None'
  type?: "Marquee"
}

function MarqueeItem(props: MarqueeItemProps) {
  const { image, backgroundImage, uRL, size } = props
  return (
    <Link href={uRL || "/brands"} passHref legacyBehavior>
      <a className={size === "Large" ? "w-80" : "w-56"}>
        <div className="w-full relative">
          <div className="aspect-w-1 aspect-h-1 flex flex-wrap justify-center items-center">
            {backgroundImage && (
                <File
                className="w-full block  h-full object-cover bg-img object-center"
                {...backgroundImage}
              />
            )}

            <div className="h-full flex block justify-center z-10 items-center">
              <figure className="w-full logo relative z-10 ">
                <File
                  className="object-contain object-center h-full"
                  {...image}
                />
              </figure>
            </div>
          </div>
        </div>

        <style>{`
          .logo {
            max-width: 14rem;
            max-height: 5rem;
            text-align: center;
            width: 100%;
            height: 100%;
          }

          .w-56 .logo {
            max-width: 10rem;
            max-height: 3rem;
            margin-bottom: -6rem;
          }

          .w-56 {
          }
        `}</style>
      </a>
    </Link>
  );
}

function MarqueeRow({ marqueeItem, width, size, repeat }: { marqueeItem?: any, width?: number, size?: string, repeat?: number }) {
  return (
    <div
      className="flex bg-black"
      style={{ width: (width && repeat && width * repeat) + "rem" }}
    >
      {marqueeItem?.map((item: MarqueeItem, i: number) => <MarqueeItem key={i} size={size} {...lowercaseKeys(item)} />)}
    </div>
  )
}

export function Marquee(props: Marquee) {
  const {
    marqueeItem,
    size,
    margin
  } = props

  const width = useMemo(() => marqueeItem && marqueeItem.length * (size === 'Large' ? 20 : 14) || 100, [marqueeItem, size])

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Section className={classNames("overflow-hidden bg-black relative")}>
      <div className={classNames("marquee-section", `size-${size}`)}>
        <div ref={ref}>
          <div
            data-animating-width
            className={classNames(inView && "in-view transform-gpu", "flex")}
            style={{
              willChange: "transform",
              width: (width || 100) * 4 + "rem",
            }}
          >
            <MarqueeRow
              repeat={4}
              width={width}
              marqueeItem={marqueeItem}
              size={size}
            />
            <MarqueeRow
              repeat={4}
              width={width}
              marqueeItem={marqueeItem}
              size={size}
            />
            <MarqueeRow
              repeat={4}
              width={width}
              marqueeItem={marqueeItem}
              size={size}
            />
            <MarqueeRow
              repeat={4}
              width={width}
              marqueeItem={marqueeItem}
              size={size}
            />
          </div>
        </div>

        <style>{`
          [data-animating-width].in-view {
            animation: 60s linear marquee infinite;
            will-change: transform;
          }

          [data-animating-width].in-view:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 700px) {
            .marquee-section{
              transform: scale(0.8) translateY(20%);
              margin-top: -20%;
            }

            .marquee-section.size-large {
              transform: scale(0.7) translateY(30%);
              margin-top: -20%;
            }
          }
        `}</style>
      </div>
    </Section>
  );
}
