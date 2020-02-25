package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.demo.model.CatalogueDesign;
import com.example.demo.repository.CatalogueRepository;
import com.example.demo.service.Impl.CatalogueServiceImplementation;

@SpringBootTest
class CatalogueDesignApplicationTests {

	@Autowired
	CatalogueServiceImplementation catalogueServiceImpl;
	
	@MockBean
	CatalogueRepository catalogueRepository;
	@Test
	void testCreateCatalogue() {
		CatalogueDesign catalogueObj=new CatalogueDesign();
		
		catalogueObj.setItemName("car");
		catalogueObj.setBrandName("mahindra");
		catalogueObj.setPrice("190");
		catalogueObj.setDetail("good");
		catalogueObj.setImageName("image.jpg");
		catalogueObj.setProductType("electronics");
		
		when(catalogueRepository.save(catalogueObj)).thenReturn(catalogueObj);
		assertEquals(catalogueObj,catalogueServiceImpl.createCatalogue(catalogueObj));
		
	}
	

}
