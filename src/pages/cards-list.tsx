/** @format */
import { useState } from "react";
import { Card } from "../components/Card";
import data from "../assets/data";
export const CardsList = () => {
	function findIndex(i: number): number | undefined {
		if (!data?.[i]?.images) return undefined;
		const ind = data?.[i].images?.find((m) => {
			if (m !== undefined) return m;
		});
		return ind !== undefined ? data?.[i].images?.indexOf(ind) : undefined; // Return undefined if not found
	}
	const [arr] = useState([
		"Hari Kemerdekaan Indonesia ke 77",
		"Sejarah Lahirnya Bangsa Indonesia",
		"Proses Pembelajaran Tatap Muka",
		"MENGENAL LEBIH DEKAT, BAPAK ISAAC KOH",
		"BERITA KEGIATAN SEKOLAH BINUS SIMPRUG",
		"KARYA-KARYA SISWA",
		"Kelas Bahasa Korea (Korean Class) – Kelas 6",

		"TRAGEDI ULANG TAHUN",
		"Kelas Bahasa Indonesia & Literatur",
		"육하원칙을 이용한 카드뉴스 만들기",
		"신문 만들기 그룹 프로젝트",
	]);

	return arr.map((val: string, index: number) => {
		const imageIndex = findIndex(index); // Get the image index

		return <Card url={imageIndex !== undefined ? data?.[index].images?.[imageIndex] : undefined} title={val} key={index} />;
	});
};
