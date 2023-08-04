create table biodata(
	id serial primary key,
	nama text,
	umur int,
	alamat text,
	jenis_kelamin text
);

insert into biodata values 
(default,'bangkit setiawan',27,'cicendo','laki - laki'),
(default,'dwi agustina setyawati',25,'sukaraja','perempuan'),
(default,'tri wulandari',23,'sokawera','perempuan'),
(default,'indra sari agustina',20,'banyumas','perempuan'),
(default,'panca wiguna',10,'bonjok','laki - laki'),
(default,'intan lestari',25,'kalibagor','perempuan'),
(default,'andri setiawan',27,'purwokerto','laki - laki'),
(default,'annisa juliana',24,'karangrau','perempuan'),
(default,'restu ardana',14,'kedunguter','laki - laki'),
(default,'enjang sayekti',21,'kaliori','perempuan');

drop table biodata; 