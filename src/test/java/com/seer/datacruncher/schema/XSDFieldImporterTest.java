/*
 * Copyright (c) 2015  www.see-r.com
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.seer.datacruncher.schema;

import com.seer.datacruncher.datastreams.XSDFieldImporter;
import com.seer.datacruncher.datastreams.XSDFieldImporter.XsdSchemaFieldInfo;
import com.seer.datacruncher.jpa.entity.SchemaFieldEntity;
import com.seer.datacruncher.jpa.entity.SchemaXSDEntity;
import org.apache.commons.io.IOUtils;
import org.junit.Test;

import java.io.IOException;
import java.net.URL;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class XSDFieldImporterTest {

    @Test
    public void parseSimpleSchema() throws Exception {
        XsdSchemaFieldInfo info = parseSchema("/datafiles/1.xsd");

        assertNotNull(info);

        List<SchemaFieldEntity> fields = info.getTopLevelFields();

        assertEquals(1, fields.size());
        SchemaFieldEntity rootField = fields.get(0);
        assertEquals("root", rootField.getName());

        fields = info.getChildren(rootField);
        assertEquals(6, fields.size());
        assertEquals("pincopallino", fields.get(3).getName());



    }
    public void parseVeryComplexSchema() throws Exception {
        XsdSchemaFieldInfo info = parseSchema("/datafiles/very_complex.xsd");
        assertNotNull(info);
    }

    private XsdSchemaFieldInfo parseSchema(String uri) throws IOException {
        URL url = getClass().getResource(uri);

        SchemaXSDEntity entity = new SchemaXSDEntity();
        entity.setSchemaXSD(IOUtils.toString(url.openStream()));
        entity.setIdSchemaXSD(1l);

        return new XSDFieldImporter(entity).getSchemaFieldInfo();
    }
}
