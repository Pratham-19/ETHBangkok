import { FunctionComponent, useCallback } from "react";
import Crate from "../../_components/common/crate";

const page: FunctionComponent = () => {
	return (
		<div>
			<section className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.437rem] pr-[0.375rem] box-border max-w-full text-left text-[2rem] text-primary font-h3">
				<div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6.312rem] box-border gap-[1rem] max-w-full">
					<h1 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit]">
						Crate Marketplace
					</h1>
					<div className="relative text-[1rem]">
						Collect random tokens purchasing a mystic crate. You can
						find from one to three different tokens inside the crate
					</div>
					<div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
						<Crate price="100" tokens="1" type="Small" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
